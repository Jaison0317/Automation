package Page;

import org.openqa.selenium.*;
import org.openqa.selenium.io.FileHandler;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Wait;
import testing.Consultar;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class WebPage {

    private WebDriver driver;

    //Elementos

    protected By locator_btn_Actividades = By.xpath("//i[@title = 'Actividades']");
    protected By locator_buscar_button = By.xpath("//div[@id='searchbox-sbox-box-tickets']/div/div/div[2]/div[2]/button/em");
    protected By locator_entradaDatos = By.xpath("//*[@id=\"searchbox-sbox-box-tickets\"]/div/div/div[2]/div[1]/div/div/div/div/input");
    protected By getlocator_actividadesPage = By.xpath("//h3[(text() = ' Bus Turístico Barcelona ' or . = ' Bus Turístico Barcelona ')]");
    protected By getLocator_actividadesPage2 = By.xpath("//h3[(text() = ' Basílica de la Sagrada Familia ' or . = ' Basílica de la Sagrada Familia ')]");
    protected By locatorUbicacion = By.xpath("//span[(text() = 'Barcelona, Cataluña, España' or . = 'Barcelona, Cataluña, España')]");
    protected By locator_filtros = By.xpath("//span[(text() = ' Filtros más usados: ' or . = ' Filtros más usados: ')]");
    protected By locator_filtrar = By.xpath("//span[(text() = ' Reserva flexible ' or . = ' Reserva flexible ')]");
    protected By locator_irPaquete = By.xpath("//label[(text() = 'Paquetes' or . = 'Paquetes')]");
    protected By locator_Desde = By.xpath("(//input[@type='text'])[11]");
    protected By locator_Destino = By.xpath("(//input[@type='text'])[12]");
    protected By locator_fecha_desde = By.xpath("//*[@type='text']//following::input[13]");
    protected By locator_fecha_hasta = By.xpath("//*[contains(text(),'22')]//following::div[139]");
    protected By locator_buscar_fechaPaquete = By.xpath("//*[@id=\"searchbox-sbox-box-packages\"]/div/div/div[2]/div[4]/button/em");
}


